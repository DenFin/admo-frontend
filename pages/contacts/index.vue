<template>
  <main>
    <AdmoContainer>
      <div class="w-full inline-flex justify-between">
        <AdmoHeadline headline-type="h1" text="Contacts" />
        <AdmoButton class="w-auto" button-type="button" text="Create new contact" />
      </div>
      <section class="py-5">
        <AdmoTableContacts />
      </section>
      <section>
        <AdmoFormContactCreate />
      </section>
    </AdmoContainer>
  </main>
</template>
<script>
import AdmoContainer from "@/components/layout/AdmoContainer";
import AdmoHeadline from "@/components/atoms/AdmoHeadline";
import AdmoButton from "@/components/atoms/AdmoButton";
import AdmoFormContactCreate from "@/components/molecules/forms/AdmoFormContactCreate";
import AdmoTableContacts from "@/components/molecules/tables/AdmoTableContacts";
export default {
  components: {AdmoFormContactCreate, AdmoHeadline, AdmoContainer, AdmoButton, AdmoTableContacts}
}
</script>
