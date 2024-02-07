// Image Gallery

const btnAddSource = document.getElementById('btn-add-source');
const inputImage = document.getElementById('input-image');

let btnCount = 0;
let sessionArr = [];
let imagesArr = [];
inputImage.addEventListener("change", () => {
    const file = inputImage.files
    console.log(inputImage.files)
    imagesArr.push(file[0]);
    inputImage.value = '';
    displayImages()
})
function displayImages() {
    let images = ""
    imagesArr.forEach((image, index) => {
      images += `<div class="w-14 h-14 bg-neutral-100 border border-neutral-200 rounded-[4px] flex justify-center items-center"><img src="${URL.createObjectURL(image)}" alt="image" class="w-full h-full object-cover"></div>`;
    //   sessionArr.push(URL.createObjectURL(image));
    //   sessionStorage.setItem("gallery", sourceArr);
    })
    panelSource.innerHTML = '';
    panelSource.innerHTML += images;
    console.log(imagesArr);
}
