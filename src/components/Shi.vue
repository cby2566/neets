<template>
    <div>
        测试组件{{a}}
        <icon name="home" :w="20" :h="20"></icon>
    </div>
</template>

<script>
console.log(123)

export default {
    data(){
        return {a:'qqq'}
    },
    created(){
        console.log('创建时')
    }
}
</script>
