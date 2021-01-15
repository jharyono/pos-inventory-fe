<template>
  <header>
    <v-app-bar class="blue-grey darken-4" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>xHexagon</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer class="blue-grey darken-4" v-model="drawer" dark app>
      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            :to="child.route"
            link
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
      <!--  -->
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      {
        action: 'mdi-view-dashboard',
        items: [{ title: 'Not Available' }],
        title: 'Dashboard'
      },
      {
        action: 'mdi-application-settings',
        active: true,
        items: [
          { title: 'User', route: { name: 'Users' } },
          { title: 'Group', route: { name: 'Group' } },
          { title: 'Setting', route: { name: 'Setting' } }
        ],
        title: 'Admin'
      },
      {
        action: 'mdi-database-sync',
        items: [
          { title: 'Goods', route: { name: 'Goods' } },
          { title: 'Supplier', route: { name: 'Supplier' } },
          { title: 'Customer', route: { name: 'Customer' } },
          { title: 'Type & Category', route: { name: 'TypeCategory' } }
        ],
        title: 'Master Data'
      },
      {
        action: 'mdi-book-minus-multiple',
        items: [
          { title: 'Good Receive' },
          { title: 'Sale' },
          { title: 'Stock Opname' },
          { title: 'etc' }
        ],
        title: 'Transaction'
      },
      {
        action: 'mdi-point-of-sale',
        items: [{ title: 'List Item' }],
        title: 'Point of Sale'
      }
    ]
  })
}
</script>
