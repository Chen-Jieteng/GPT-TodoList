<template>
    <strong>为什么没完成？</strong>
    <div>
        <li>无数据</li>
    </div>
</template>

<style> 
    .reason-incompleted {
      background-color:darkseagreen;
      padding: 1rem;
      border-radius: 5px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .reason-incompleted :hover {
      transform: translateY(-2px) scale(1.0);
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    }
</style>
