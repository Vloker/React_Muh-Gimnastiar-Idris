React Hook dan praktikum menggunakan hooks react
-React Hook merupakan fitur baru direact 16.8. dengan adanya hooks, kita dapat menggunakan state dan fitur react yang lain tanpa perlu menulis sebuah kelas.
-Ada beberapa hooks dasar (yang sering digunakan)
	1. useState
	2. useEffect
	3. useContext
	4. useReducer
	5. useCallback
	6. useMemo

-Aturan dari hooks
1. jangan memanggil hooks dari dalam loops(perulangan), condition, atau nested function
2. jangan panggil dari fungsi js biasa
	kita dapat memanggil hooks ketika dari komponen fungsi react dan dari custom hooks