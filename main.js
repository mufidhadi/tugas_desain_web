function tampilMenu() {
  console.log("menu");
  if (belumBuka) {
    console.log("bukain");
    document.getElementById("sembunyi").id="muncul";
    belumBuka=false;
  } else {
    console.log("tutup");
    document.getElementById("muncul").id="sembunyi";
    belumBuka=true;
  }
}
