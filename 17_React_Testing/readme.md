pertemuan 33 React Testing
Testing adalah Proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar
sepanjang aplikasi berjalan. Test Assertion ini adalah ekspresi boolean yang mengembalikan nilai
true kecuali ada bug di kode kita.
	Manfaat Testing 
	1. Saat kita mengubah sebuah code bagian tertentu, dan ada bagian yang lain menjadi
	   broken kita akan segera mengetahuinya
	2. Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug.

	Kategori Testing
	1. Rendering Component Trees
	2. Menjalakan aplikasi lengkap

	Rekomendasi Tools
	1. React Testing
	2. Vitest

Render dan Bug 
Render berfungsi untuk merender file JSX apa pun yang dibutuhkan. untuk meyakinkan bahwa file JSX sudah
terender, kita bisa menggunakan fungsi debug yang selalu digunakan apabila kita tidak yakin seperti apa hasil
dari fungsi render.

Kategori Testing
1. LabelTtext : getByLabelText = <label for="search" />
2. PlaceholderText: getByPlaceholderText = <input placeholder="search" />
3. AltText: getByAltText = <img alt="profile" />
4. DisplayValue: getDisplayValue = <input Value="javascript" />