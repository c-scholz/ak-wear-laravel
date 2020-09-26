<template>
  <div class="container">
    <div class="row justify-content-center mt-0">
      <div class="col-12 text-center p-0">
        <div class="card px-0 pb-0">
            <div class="col-md-12 px-0">
              <order-form/>
            </div> <!-- Col-Md-12 -->
        </div> <!-- Card -->
      </div> <!-- Col-12 -->
    </div> <!-- Row -->
  </div> <!-- Container -->
</template>

<script>
import Layout from '../Shared/Layout'
import OrderForm from '../Components/OrderForm'

export default {
  layout: Layout,
  components: {
    OrderForm
  }
}
</script>