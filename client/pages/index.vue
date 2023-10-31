<script setup lang="ts">
import loginMutation from '../graphql/mutations/login.gql'
import logoutMutation from '../graphql/mutations/logout.gql'

const me = useMe();
const router = useRouter();


const login = async () => {
    const { mutate } = useMutation(loginMutation, {
        variables: {
            data: {
                email: 'daspetemail@gmail.com',
                password: '123456'
            }
        }
    });

    await mutate();

    window.location.reload();
};

const logout = async () => {
    const { mutate } = useMutation(logoutMutation);

    await mutate();

    window.location.reload();
};

</script>

<template>
    <div class="flex gap-2">
        fdf
        <div>{{ me }}</div>
        <div v-if="!me"><button @click="login">Login</button></div>
        <div v-if="me"><button @click="logout">Logout</button></div>
    </div>
</template>
