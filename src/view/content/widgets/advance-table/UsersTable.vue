<template>
  <!--begin::Advance Table Widget 9-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Alla Användare</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
          >Nedanstående användare är har tillgång till denna förening</span
        >
      </h3>
      <div class="card-toolbar">
        <a href="#" class="btn btn-danger font-weight-bolder font-size-sm"
          >Ny Användare</a
        >
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-0 pb-3">
      <div class="tab-content">
        <!--begin::Table-->
        <div class="table-responsive">
          <table
            class="table table-head-custom table-vertical-center table-head-bg table-borderless"
          >
            <thead>
              <tr class="text-left">
                <th style="min-width: 250px" class="pl-7">
                  <span class="text-dark-75">namn</span>
                </th>
                <th style="min-width: 120px">epost</th>
                <th style="min-width: 120px">acccess</th>
                <th style="min-width: 101px"></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, i) in items">
                <tr v-bind:key="i">
                  <td>
                    <span
                      class="text-dark-75 font-weight-bolder d-block font-size-lg"
                      >{{ item.firstname }} {{ item.lastname }}</span>
                  </td>
                  <td>
                    <span
                      class="text-dark-75 font-weight-bolder d-block font-size-lg"
                      >{{ item.email }}</span>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="btn btn-light-success font-weight-bolder font-size-sm"
                      >Ge tillgång</a
                    >
                  </td>
                  <td class="text-right pr-0">
                  
                  <a href="#" class="btn btn-icon btn-light btn-sm mx-3">
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <!--begin::Svg Icon-->
                      <inline-svg
                        src="/assets/svg/Write.svg"
                      ></inline-svg>
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                  <a href="#" class="btn btn-icon btn-light btn-sm">
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <!--begin::Svg Icon-->
                      <inline-svg
                        src="/assets/svg/Trash.svg"
                      ></inline-svg>
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!--end::Table-->
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Advance Table Widget 9-->
</template>

<script>
export default {
  name: "simple-table",
  props: ["items"],
  data() {
    return {
      list: [
        
      ]
    };
  }
};
</script>
