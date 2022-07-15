<template>
    <div class="link-item" @click="goLink">
        <div class="poster">
            <van-image lazy-load fit="cover" :src="value.poster" class="poster-img" />
        </div>
        <div class="title">{{ value.title }}</div>
        <div class="bottom">
            <div class="brand">
                <van-image lazy-load fit="fill" :src="value.avatar" class="brand-icon" />
                {{ value.author }}
            </div>
            <div class="like"><SvgIcon class="like-icon" name="like" />{{ value.like }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup name="LinkItem">
const props = defineProps({
    value: {
        type: Object,
        default: function () {
            return {
                poster: '',
                title: '',
                author: '',
                like: 0,
                url: ''
            }
        }
    }
})
const goLink = () => {
    props.value.url && (location.href = props.value.url)
}
</script>

<style lang="scss" scoped>
.link-item {
    width: 167.5px;
    margin-bottom: 10px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 2px 4px 0px rgba(30, 55, 84, 0.1);
}

.poster {
    height: 220px;
    background: $fade;
    .poster-img {
        width: 100%;
        height: 100%;
    }
}

.title {
    margin: 8px 5px;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    font-weight: $semiBold;
    min-height: 42px;
}

.bottom {
    margin: 0 5px 5px;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    align-items: center;
}

.brand {
    width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .brand-icon {
        width: 15px;
        height: 15px;
        background: $fade;
        border-radius: 7.5px;
        position: relative;
        top: 4px;
        margin-right: 1px;
        overflow: hidden;
    }
}

.like {
    color: $subColor;

    .like-icon {
        font-size: 12px;
        position: relative;
        top: 0;
        margin-right: 2px;
    }
}
</style>
