JSX
Jsx adalah ekstensi dari javascrip yang dapat mendeklarasikan ui dengan baik dan membuat components
Kenapa menggunakan JSX?
karena JSX dibuat berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI

spesifikasi jenis elemen react
-dalam pembuatan componens harus menggunakan pascal case
Menaruh expression pada JSX
- dapat menaruh ekspresi js yang valid pada jsx dengan menggunakan kurung kurawal
JSX juga dapat diartikan dengan expression dimana setelah dikompilasi, eskpresi jsx akan menjadi panggilan fungsi JS biasa dan menjadi objek JS
Mementukan atribut dengan JSX
	- react DOM menggunakan camelCase sebagai konvensi penamaan

Komponen React merupakan bagian yang dapat digunakan kembali untuk menentukan tampilan UI terdiri dari props,state, dan DOM

react lifecycle (
-mounting pertama kali pembukaan html
-updating (mengupdate data baru)
-unmounting (keluar ketika tidak ada lagi perubahan)

yang umum 
1. render
	-fungsi yang paling sering dipakai
	-required pada class component
	-pure function
2. componentDidMount , waktu yang pas untuk berinteraksi dengan backend
	-dipanggil ketika component sudah dirender pertama kali
	-tempat yang tepat untuk pemanggil API
3. componentDidUpdate
	-dipanggil ketika update (props atau state berubah)
4. componentWillUnmount
	-dipanggil ketika component akan hapus (remove)
	-cocok untuk clean up actions

Render Bersyarat (if else)
pada react, kita dapat membuat komponen berbeda yang mencakup perilaku  yang dibutuhkan.
	-menggunakan if
	-if dengan operator
	-if else dengan ternary
	-mencegah komponen untuk rendering

render list kita dapat membangun koleksi dari beberapa elemen
key membantu react agar dapat mengidentifikasi item yang mana sudah diubah, dll