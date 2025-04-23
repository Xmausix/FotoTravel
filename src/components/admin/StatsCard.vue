<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  value: number | string
  icon?: string
  change?: {
    value: number
    type: 'increase' | 'decrease'
  }
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
}>()

const colors = {
  primary: {
    bg: 'bg-primary-50',
    text: 'text-primary-700',
    icon: 'text-primary-500',
  },
  secondary: {
    bg: 'bg-secondary-50',
    text: 'text-secondary-700',
    icon: 'text-secondary-500',
  },
  accent: {
    bg: 'bg-accent-50',
    text: 'text-accent-700',
    icon: 'text-accent-500',
  },
  success: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    icon: 'text-green-500',
  },
  warning: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-700',
    icon: 'text-yellow-500',
  },
  danger: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    icon: 'text-red-500',
  }
}

const selectedColor = colors[props.color || 'primary']
</script>

<template>
  <div class="card h-full p-6">
    <div class="flex items-center">
      <div :class="[selectedColor.bg, 'rounded-full p-3']">
        <!-- Default icon if none provided -->
        <svg 
          v-if="!icon" 
          :class="[selectedColor.icon, 'h-6 w-6']"
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
        
        <!-- Chart icon -->
        <svg 
          v-else-if="icon === 'chart'" 
          :class="[selectedColor.icon, 'h-6 w-6']"
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
        
        <!-- Image icon -->
        <svg 
          v-else-if="icon === 'image'" 
          :class="[selectedColor.icon, 'h-6 w-6']"
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        
        <!-- Post icon -->
        <svg 
          v-else-if="icon === 'post'" 
          :class="[selectedColor.icon, 'h-6 w-6']"
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        
        <!-- Message icon -->
        <svg 
          v-else-if="icon === 'message'" 
          :class="[selectedColor.icon, 'h-6 w-6']"
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </div>
      <div class="ml-5 w-0 flex-1">
        <dl>
          <dt class="text-sm font-medium text-gray-500 truncate">{{ title }}</dt>
          <dd>
            <div class="text-xl font-semibold text-gray-900">{{ value }}</div>
          </dd>
        </dl>
      </div>
    </div>
    <div v-if="change" class="mt-4">
      <div class="flex items-center text-sm">
        <svg 
          v-if="change.type === 'increase'" 
          class="flex-shrink-0 h-5 w-5 text-green-500" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        <svg 
          v-else 
          class="flex-shrink-0 h-5 w-5 text-red-500" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span 
          class="ml-2" 
          :class="change.type === 'increase' ? 'text-green-600' : 'text-red-600'"
        >
          {{ change.value }}%
        </span>
        <span class="ml-1 text-gray-500">from last month</span>
      </div>
    </div>
  </div>
</template>