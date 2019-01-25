<template>
    <div>
        测试组件{{a}}
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
