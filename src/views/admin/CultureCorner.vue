<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">Culture Corner</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-btn color="green" @click="openDialog">Add Article</v-btn>
        <v-data-table-server v-model:items-per-page="tableItemsPerPage" v-model:sort-by="tableSortBy"
          v-model:page="tablePage" :items="tableProducts" :headers="tableHeaders" :loading="tableLoading"
          :items-length="tableItemsLength" :search="tableSearch" hover @update:items-per-page="tableLoadItems"
          @update:sort-by="tableLoadItems" @update:page="tableLoadItems">
          <template #top>
            <v-text-field label="Search" append-icon="mdi-magnify" @click:append="tableApplySearch"
              @keydown.enter="tableApplySearch" v-model="tableSearch"></v-text-field>
          </template>
          <template #[`item.image`]="{ item }">
            <v-img :src="item.raw.image" height="50px"></v-img>
          </template>
          <template #[`item.publish`]="{ item }">
            <v-icon icon="mdi-check" v-if="item.raw.publish"></v-icon>
          </template>
          <template #[`item.edit`]="{ item }">
            <v-btn icon="mdi-pencil" @click="tableEditItem(item.raw)" variant="text"></v-btn>
          </template>
        </v-data-table-server>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog persistent v-model="dialog" width="500px">
    <v-form :disabled="isSubmitting" @submit.prevent="submit">
      <v-card>
        <v-card-title>{{ dialogId.length > 0 ? 'Edit Article' : 'Add Article' }}</v-card-title>
        <v-card-text>
          <v-text-field label="Title" v-model="title.value.value"
            :error-messages="title.errorMessage.value"></v-text-field>
          <v-textarea label="Content" v-model="content.value.value" :error-messages="content.errorMessage.value"
            rows="12"></v-textarea>
          <v-checkbox label="Publish" v-model="publish.value.value"
            :error-messages="publish.errorMessage.value"></v-checkbox>
          <vue-file-agent v-model="files" v-model:raw-model-value="rawFiles" :max-files="1" max-size="1MB"
            accept="image/jpg,image/jpeg,image/png" :multiple="false"
            :error-text="{ type: 'Invalid file format', size: 'File is too large' }" deletable
            ref="fileAgent"></vue-file-agent>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" @click="closeDialog" :loading="isSubmitting">Cancel</v-btn>
          <v-btn color="green" type="submit" :loading="isSubmitting">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

// 目前表格設定一頁幾筆
const tableItemsPerPage = ref(5)
// 目前表格設定排序
const tableSortBy = ref([
  {
    key: 'title',
    order: 'asc'
  }
])
// 目前表格頁碼
const tablePage = ref(1)
// 表格商品
const tableProducts = ref([])
// 表格欄位
const tableHeaders = [
  { title: 'Image', align: 'center', sortable: false, key: 'image' },
  { title: 'Title', align: 'center', sortable: true, key: 'title' },
  { title: 'Content', align: 'center', sortable: true, key: 'content' },
  { title: 'Date', align: 'center', sortable: true, key: 'date' },
  { title: 'Likes', align: 'center', sortable: true, key: 'likes.length' },
  { title: 'Publish', align: 'center', sortable: true, key: 'publish' },
  { title: 'Edit', align: 'center', sortable: false, key: 'edit' }
]
// 表格載入狀態
const tableLoading = ref(false)
// 表格總資料數
const tableItemsLength = ref(0)
// 表格搜尋
const tableSearch = ref('')
const tableApplySearch = () => {
  tablePage.value = 1
  tableLoadItems()
}

// 表格載入資料
const tableLoadItems = async () => {
  tableLoading.value = true
  try {
    const { data } = await apiAuth.get('/culture/all', {
      params: {
        page: tablePage.value,
        itemsPerPage: tableItemsPerPage.value,
        sortBy: tableSortBy.value[0]?.key || 'title',
        sortOrder: tableSortBy.value[0]?.order || 'asc',
        search: tableSearch.value
      }
    })
    tableProducts.value.splice(0, tableProducts.value.length, ...data.result.data)
    tableItemsLength.value = data.result.count
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
  tableLoading.value = false
}
tableLoadItems()
// 表格編輯
const tableEditItem = (item) => {
  // 設定表單id
  dialogId.value = item._id
  // 表單填入預設值
  title.value.value = item.title
  content.value.value = item.content
  publish.value.value = item.publish
  // 打開表單
  dialog.value = true
}

// 表單對話框
const dialog = ref(false)
const dialogId = ref('')
const openDialog = () => {
  dialogId.value = ''
  dialog.value = true
}
const closeDialog = () => {
  dialog.value = false
  resetForm()
  fileAgent.value.deleteFileRecord()
}

// 表單
const schema = yup.object({
  title: yup.string().required('Title is required'),
  content: yup.string().required('Content is required'),
  publish: yup.boolean()
})

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    title: '',
    content: '',
    publish: false
  }
})
const title = useField('title')
const content = useField('content')
// const description = useField('description')
// const category = useField('category')
const publish = useField('publish')

const files = ref([])
const rawFiles = ref([])
const fileAgent = ref(null)

const submit = handleSubmit(async (values) => {
  if (dialogId.value.length === 0 && files.value.length === 0) return
  try {
    const formData = new FormData()
    formData.append('title', values.title)
    formData.append('content', values.content)
    formData.append('date', new Date().toISOString())
    formData.append('publish', values.publish)
    if (files.value.length > 0) formData.append('image', files.value[0].file)

    if (dialogId.value.length > 0) {
      await apiAuth.patch('/culture/' + dialogId.value, formData)
      createSnackbar({
        text: 'Updated Successfully',
        showCloseButton: false,
        snackbarProps: {
          timeout: 2000,
          color: 'green',
          location: 'bottom'
        }
      })
    } else {
      await apiAuth.post('/culture', formData)
      createSnackbar({
        text: 'Added Successfully',
        showCloseButton: false,
        snackbarProps: {
          timeout: 2000,
          color: 'green',
          location: 'bottom'
        }
      })
    }

    closeDialog()
    tableLoadItems()
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})
</script>
