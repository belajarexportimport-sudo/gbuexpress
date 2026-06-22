export default {
  name: 'resi',
  title: 'Resi & Pengiriman',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul / Nama Resi',
      type: 'string',
      description: 'Penamaan resi atau dokumentasi pengiriman (contoh: Resi Ekspor ke Singapura)',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Gambar Resi',
      type: 'image',
      options: {
        hotspot: true, // Memungkinkan crop dinamis
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'altText',
      title: 'Alternative Text (SEO)',
      type: 'string',
      description: 'Teks deskripsi gambar untuk keperluan aksesibilitas dan SEO'
    }
  ]
}
