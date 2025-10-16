document.addEventListener("DOMContentLoaded", function () {
  const bgColorInput = document.getElementById("bgColor")
  const fontColorInput = document.getElementById("fontColor")
  const fontSizeSelect = document.getElementById("fontSize")
  const saveBtn = document.getElementById("saveBtn")
  const resetBtn = document.getElementById("resetBtn")

  const FONT_SIZES = {
    small: "14px",
    medium: "18px",
    large: "22px"
  }

  loadSettings()

  saveBtn.addEventListener("click", function () {
    const settings = {
      background: bgColorInput.value,
      fontColor: fontColorInput.value,
      fontSize: fontSizeSelect.value
    }
    localStorage.setItem("pageSettings", JSON.stringify(settings))
    applySettings(settings)
    alert("บันทึกการตั้งค่าเรียบร้อยแล้ว!")
  })

  resetBtn.addEventListener("click", function () {
    localStorage.removeItem("pageSettings")
    bgColorInput.value = "#ffffff"
    fontColorInput.value = "#000000"
    fontSizeSelect.value = "medium"
    applySettings({
      background: "#ffffff",
      fontColor: "#000000",
      fontSize: "medium"
    })
    alert("คืนค่าตั้งต้นเรียบร้อยแล้ว!")
  })

  function applySettings(settings) {
    document.body.style.backgroundColor = settings.background
    document.body.style.color = settings.fontColor
    document.body.style.fontSize = FONT_SIZES[settings.fontSize]
  }

  function loadSettings() {
    const saved = localStorage.getItem("pageSettings")
    if (saved) {
      const settings = JSON.parse(saved)
      bgColorInput.value = settings.background
      fontColorInput.value = settings.fontColor
      fontSizeSelect.value = settings.fontSize
      applySettings(settings)
    }
  }
})
