<template>
<div class="card edit-field">
    <div class="card-body">
        <label for="edit-post" class="form-label">Edit your post here ...</label>
        <textarea v-model="content" name="form-control" id="edit-post" rows="3"></textarea>
        <div class="text-center">
            <button @click="post_a_post" type="button" class="btn btn-primary btn-sm">POST</button>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "UserProfileWrite",

    setup(props, context) {
        let content = ref('');

        const post_a_post = () => {
            context.emit('post_a_post', content.value);
            content.value = "";
        }

        return {
            content,
            post_a_post,
        }
    }
}
</script>

<style scoped>
.edit-field {
    margin-top: 15px;
}

button {
    margin-top: 10px;
    
}
</style>