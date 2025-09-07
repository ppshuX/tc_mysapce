<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/390068_lg_f037b0f8dc.jpeg" alt="avater.img">
                </div>
                <div class="col-9">
                    <div class="username">{{ fullName }}</div>
                    <div class="fans">fans: {{ user.followerCount }}</div>
                    <button @click="follow" v-if="!user.is_followed" type="button" class="btn btn-secondary btn-sm">follow</button>
                    <button @click="unfollow" v-if="user.is_followed" type="button" class="btn btn-secondary btn-sm">unfollow</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: "UserProfileInfo",
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    setup(props, context) {
        let fullName = computed(() => {
            return props.user.lastName + ' ' + props.user.firstName;
        })

        const follow = () => {
            context.emit('follow')  // 触发父组件函数follow 
        }

        const unfollow = () => {
            context.emit('unfollow')
        }

        return {
            fullName,
            follow,
            unfollow,
        }
    }
}
</script>

<style scoped>
.img {
    border-radius: 40%;
}

.username {
    font-weight: bold;
}

.fans {
    font-size: 12px;
    color: gray;
}

button {
    padding: 2px 4px;
    font-size: 12px;
}
</style>