export default {
  name: 'client',
  title: 'Our Trusted Clients',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Client / Perusahaan',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'logo',
      title: 'Logo Client',
      type: 'image',
      options: {
        hotspot: true, // Memungkinkan crop dinamis
      },
      validation: Rule => Rule.required()
    }
  ]
}
