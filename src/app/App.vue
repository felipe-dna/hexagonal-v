<script setup lang="ts">
</script>

<template>
  <n-config-provider>
    <n-loading-bar-provider>
      <!-- https://www.naiveui.com/en-US/dark/components/message -->
      <n-message-provider>
        <!-- https://www.naiveui.com/en-US/dark/components/notification -->
        <n-notification-provider>
          <!-- https://www.naiveui.com/en-US/dark/components/dialog -->
          <n-dialog-provider>
            <n-space vertical>
              <router-view />
            </n-space>
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
