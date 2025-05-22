<script setup>
</script>

<template>
    <div class="model-card-container" @click="console.log('lol')">
        <div class="model-card">
            <div class="model-img">
                <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" fill="#4CAF50"/>
                
                    <g transform="translate(50 50)">
                        <line x1="-30" y1="0" x2="30" y2="0" stroke="#CCFFD0" stroke-width="10" />
                        <line x1="0" y1="-30" x2="0" y2="30" stroke="#CCFFD0" stroke-width="10" />
                    </g>
                </svg>
            </div>
            <div class="new-model">Добавить</div>
            <div class="new-model">новую модель</div>
        </div>
    </div>
</template>

<style scoped>

.model-card-container {
    cursor: pointer;
    overflow: hidden;

    user-select: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    outline: none;

    color: rgb(223, 223, 223);
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.3) inset;

    min-height: auto;
    container-type: inline-size;

    /*
    border-radius: 8px;
    */
    display: flex;
}

.model-card {
    background-color: rgba(210, 26, 26, 0);
    width: 100cqw;
    height: calc(8px + 20px + 8px + 100cqw - 16px + 8px + 16px + 8px);
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.model-img {
    width: calc(100cqw - 16px);
    aspect-ratio: 1/1;
}


.model-img svg {
    width: calc(100cqw - 16px);
    height: calc(100cqw - 16px);
}


.new-model {
    display: flex;
    justify-content: center;
    height: 18px;
    font-size: 14px;
}

</style>