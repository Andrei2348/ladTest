<template>
    <nav class="navbar__wrapper">
        <div class="container">
            <ul class="navbar__menu-items">
              <li class="navbar__menu-item">
                <router-link :to="{ name: 'Weather' }" class="navbar__menu-item--link">Погода</router-link>
              </li>
              <li class="navbar__menu-item">
                <router-link :to="{ name: 'CurrencyConverter' }" class="navbar__menu-item--link">Конвертер валют</router-link>
              </li>
            </ul>
        </div>
    </nav>.
</template>

<style lang="scss" scoped>
.navbar{
    &__wrapper{
        width: 100%;
        background-color: #153a64;
    }
    &__menu-items{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 18px;
        padding: 12px 0;
    }
    &__menu-item--link{
        color: #fff;
        font-size: 16px;
        line-height: 1.2;
        font-weight: 500;
        cursor: pointer;
        position: relative;
    }
    &__menu-item--link.router-link-active {
		color: #f7f7f7;
	}
    &__menu-item--link.router-link-active::after {
		position: absolute;
        content: '';
        height: 1px;
        width: 100%;
        background-color: #f7f7f7;
        left: 0;
        bottom: 0;
	}
}


</style>
