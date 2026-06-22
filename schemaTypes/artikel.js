export default {
  name: 'artikel',
  title: 'Artikel GBU Express',
  type: 'document',
  fields: [
    // ==========================================
    // 1. SLUG BILINGUAL
    // ==========================================
    {
      name: 'slugId',
      title: 'Slug / URL Halaman (Bahasa Indonesia)',
      type: 'slug',
      description: 'Contoh: perbedaan-pengiriman (klik "Generate" dari judul Indonesia)',
      options: {
        source: 'judulId',
        maxLength: 96,
      },
    },
    {
      name: 'slugEn',
      title: 'Slug / URL Halaman (English)',
      type: 'slug',
      description: 'Example: shipping-differences (klik "Generate" dari judul English)',
      options: {
        source: 'judulEn',
        maxLength: 96,
      },
    },

    // ==========================================
    // 2. JUDUL & DESKRIPSI SINGKAT (UNTUK KARTU)[cite: 1]
    // ==========================================
    {
      name: 'judulId',
      title: 'Judul (Bahasa Indonesia)',
      type: 'string',
    },
    {
      name: 'deskripsiId',
      title: 'Deskripsi Singkat / Cuplikan (Bahasa Indonesia)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'judulEn',
      title: 'Judul (English)',
      type: 'string',
    },
    {
      name: 'deskripsiEn',
      title: 'Deskripsi Singkat / Cuplikan (English)',
      type: 'text',
      rows: 3,
    },

    // ==========================================
    // 3. ISI KONTEN LENGKAP ARTIKEL (YANG SEMPAT HILANG)
    // ==========================================
    {
      name: 'kontenId',
      title: 'Isi Lengkap Artikel (Bahasa Indonesia)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }], // Bisa ketik teks (bold/italic) dan masukin gambar di dalam artikel
    },
    {
      name: 'kontenEn',
      title: 'Isi Lengkap Artikel (English)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },

    // ==========================================
    // 4. SETTING SEO BILINGUAL
    // ==========================================
    {
      name: 'seoKeywordsId',
      title: 'SEO Keywords (Bahasa Indonesia)',
      type: 'string',
    },
    {
      name: 'seoKeywordsEn',
      title: 'SEO Keywords (English)',
      type: 'string',
    },
    {
      name: 'metaDescriptionId',
      title: 'Meta Description Tag (Bahasa Indonesia)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'metaDescriptionEn',
      title: 'Meta Description Tag (English)',
      type: 'text',
      rows: 3,
    },

    // ==========================================
    // 5. CRAWLING CONTROL
    // ==========================================
    {
      name: 'metaRobots',
      title: 'Meta Robots Tag',
      type: 'string',
      options: {
        list: [
          { title: 'Index, Follow (Normal - Disarankan)', value: 'index, follow' },
          { title: 'Noindex, Follow', value: 'noindex, follow' },
        ],
      },
      initialValue: 'index, follow',
    },
    {
      name: 'includeInSitemap',
      title: 'Masukkan ke Sitemap?',
      type: 'boolean',
      initialValue: true,
    }
  ],
}