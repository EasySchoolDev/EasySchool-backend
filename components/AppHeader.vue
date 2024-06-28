<template>
  <header>
    <img src="/public/favicon.ico" alt="Website Icon" id="header-icon">
    <ULink to="/">主页</ULink>
    <toggle-dark-mode />
  </header>
</template>

<style scoped>
header {
  background-color: #00bfff;
  display: flex;
  justify-content: start;
  align-items: center;
}

#header-icon {
  height:48px;
  width: 58px;
  margin-left: 24px;
  margin-right: 48px;
}

ULink {
  font-size: 32px;
  color: white;
  text-decoration: none;
}
</style>