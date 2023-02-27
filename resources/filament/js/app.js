import './bootstrap';
import Alpine from 'alpinejs'
import Chart from 'chart.js/auto'
import Collapse from '@alpinejs/collapse'
import AlpineFloatingUI from '@awcodes/alpine-floating-ui'
import Focus from '@alpinejs/focus'
import Mousetrap from '@danharrin/alpine-mousetrap'
import FormsAlpinePlugin from '../../../vendor/filament/forms/dist/module.esm'
import NotificationsAlpinePlugin from '../../../vendor/filament/notifications/dist/module.esm'
import Persist from '@alpinejs/persist'
import Tooltip from '@ryangjchandler/alpine-tooltip'

Alpine.plugin(AlpineFloatingUI)
Alpine.plugin(Focus)
Alpine.plugin(FormsAlpinePlugin)
Alpine.plugin(NotificationsAlpinePlugin)
Alpine.plugin(Collapse)
Alpine.plugin(Mousetrap)
Alpine.plugin(Persist)
Alpine.plugin(Tooltip)

Alpine.store('sidebar', {
    isOpen: Alpine.$persist(true).as('isOpen'),

    collapsedGroups: Alpine.$persist([]).as('collapsedGroups'),

    groupIsCollapsed: function (group) {
        return this.collapsedGroups.includes(group)
    },

    collapseGroup: function (group) {
        if (this.collapsedGroups.includes(group)) {
            return
        }

        this.collapsedGroups = this.collapsedGroups.concat(group)
    },

    toggleCollapsedGroup: function (group) {
        this.collapsedGroups = this.collapsedGroups.includes(group)
            ? this.collapsedGroups.filter(
                (collapsedGroup) => collapsedGroup !== group,
            )
            : this.collapsedGroups.concat(group)
    },

    close: function () {
        this.isOpen = false
    },

    open: function () {
        this.isOpen = true
    },
})

Alpine.store(
    'theme',
    window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
)

window.addEventListener('dark-mode-toggled', (event) => {
    Alpine.store('theme', event.detail)
})

window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
        Alpine.store('theme', event.matches ? 'dark' : 'light')
    })

Chart.defaults.font.family = `'DM Sans', sans-serif`
Chart.defaults.color = '#6b7280'

window.Alpine = Alpine
window.Chart = Chart

Alpine.start()
