<template>
  <div class="pdf-preview shadow-xl mx-auto">
    <div class="pdf-preview-container">
      <div class="pdf-preview__head">
        <span class="font-bold">{{ invoice.generalInformation.client }}</span>
      </div>
      <div class="pdf-preview__sidebar">
        <div>
          <strong>Dennis Fink</strong><br>
          <span>Lüttringhauser Str. 53</span><br><br>

          <span>0160 609 1990</span><br>
          <span>kontakt@dennisfink.de</span><br>
          <span>dennisfink.de</span><br><br>

          <span>Volksbank Euskirchen</span><br>
          <span>IBAN: DE06 3826 0082 6606 7460 14</span><br>
          <span>BIC: GENODED1EVB</span><br><br>


        </div>
      </div>
      <div class="pdf-preview__pre-content">
        <div class="invoice__info">
          <div>
            <span class="font-bold">Rechnungsdatum</span><br>
            <span v-if="invoice.generalInformation.invoiceDate">{{ getFormattedDate(invoice.generalInformation.invoiceDate, 'de-De', {year: 'numeric', month: 'numeric', day: 'numeric'})
              }}</span>
          </div>
          <div>
            <span class="font-bold">Rechnungsnummer</span><br>
            <span>{{ invoice.generalInformation.invoiceNumber }}</span>
          </div>
        </div>
      </div>
      <div class="pdf-preview__content">
        <div class="invoice">
          <div class="invoice__title">
            {{ invoice.generalInformation.invoiceTitel }}
          </div>
          <div class="invoice__table">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead></thead>
              <tbody>
                <tr class="border-b border-white" v-for="row in rows" :key="row.position">
                  <td class="bg-gray-100 p-2 border-r border-white">{{ row.position }}</td>
                  <td class="bg-gray-100 p-2 border-r border-white">{{ row.description }}</td>
                  <td class="bg-gray-100 p-2 border-r border-white">{{ row.price }}</td>
                  <td class="bg-gray-100 p-2 border-r border-white">{{ row.quantity }}</td>
                  <td class="bg-gray-100 p-2">{{ row.total }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dateHelperMixin from "@/mixins/dateHelperMixin"
export default {
  props: {
    invoice: {
      type: Object,
      required: true
    },
    rows: {
      type: Array,
      required: true
    }
  },
  mixins: [dateHelperMixin]
}
</script>

<style>
.pdf-preview {
  color: #002c42;
  font-family: 'IBM Plex Sans';
  width: 210mm;
  height: 297mm;
  font-size: 8pt;
}

.pdf-preview-container {
 @apply relative;
}

.pdf-preview__head {
  @apply absolute bg-gray-100;
  top: 35mm;
  left: 15mm;
  height: 40mm;
  width: 85mm;
  padding: 5mm;
}

.pdf-preview__sidebar {
  @apply text-right absolute;
  top: 35mm;
  right: 15mm;
}

.pdf-preview__pre-content {
  @apply absolute;
  top: 100mm;
  left: 15mm;
}

.pdf-preview__content {
  position: absolute;
  left: 15mm;
  right: 15mm;
  top: 140mm;
}

.invoice__title {
  font-weight: bold;
  font-size: 12pt;
  margin-bottom: 5mm;
}

</style>
