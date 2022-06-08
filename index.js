// function previewImage() {
// 	var file = document.getElementById("file").files;
// 	if (file.length > 0) {
// 		var fileReader = new FileReader();

// 		fileReader.onload = function (event) {
// 			document.getElementById("preview").setAttribute("src", event.target.result);
// 		};

// 		fileReader.readAsDataURL(file[0]);
// 	}
// }

let button = document.getElementById("button");

function previewImage() {
  let photo = document.getElementById("photo");
  let photoUrl = document.getElementById("url").value;

  let image = document.createElement("img");
  image = photo;

  photo.src = photoUrl;
  console.log("nice");

  document.body.appendChild(photo);
}
