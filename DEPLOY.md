# Panduan Deployment ke Vercel

Berikut adalah cara termudah untuk mendeploy aplikasi Next.js Anda ke Vercel.

## Cara 1: Menggunakan Vercel CLI (Paling Cepat)

Anda bisa mendeploy langsung dari terminal tanpa harus push ke GitHub terlebih dahulu.

1.  **Login ke Vercel**
    Jalankan perintah berikut di terminal:

    ```bash
    npx vercel login
    ```

    Ikuti instruksi untuk login menggunakan email atau akun GitHub Anda.

2.  **Deploy Project**
    Setelah login, jalankan perintah:

    ```bash
    npx vercel
    ```

    Jawab pertanyaan setup (cukup tekan Enter untuk sebagian besar pertanyaan default):

    - **Set up and deploy?** [Y]
    - **Which scope?** [Pilih akun Anda]
    - **Link to existing project?** [N]
    - **Project name?** [nexoravelveta] (atau biarkan default)
    - **In which directory?** [./]
    - **Want to modify cool settings?** [N]

    Vercel akan mulai membangun dan memberikan link URL "Preview".

3.  **Deploy ke Production**
    Jika sudah oke, deploy versi live (production) dengan:
    ```bash
    npx vercel --prod
    ```
    Anda akan mendapatkan URL final seperti `nexoravelveta.vercel.app`.

---

## Cara 2: Melalui GitHub (Otomatis)

Cara ini bagus jika Anda ingin update otomatis setiap kali Anda save/push code.

1.  **Push kode ke GitHub/GitLab/Bitbucket**.
2.  Buka [vercel.com/new](https://vercel.com/new).
3.  **Import Project** dari repositori Git Anda.
4.  Klik **Deploy**.
5.  Selesai! Vercel akan otomatis mendeteksi ini adalah aplikasi Next.js.

## Catatan Penting

- Pastikan tidak ada error saat `npm run build` sebelum mendeploy.
- Aplikasi ini menggunakan folder `public/images` untuk gambar, yang akan otomatis ter-upload.
