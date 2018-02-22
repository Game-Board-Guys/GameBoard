var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/gameboardguys/upload';
var CLOUDINARY_UPLOAD_PRESET = 'a9dcygfn';

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function(event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    console.log(file);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function(res) {
        console.log(res);
        imgPreview.src = res.data.secure.url
    }).catch(function(err) {
        console.log(err);
    })
})