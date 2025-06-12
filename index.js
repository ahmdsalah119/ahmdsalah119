var sitNameInput = document.getElementById('sitename');
var sitUrlInput = document.getElementById('siteurl');

var addingContainer = [];

if(localStorage.getItem('website')!== null)
{
    addingContainer = JSON.parse(localStorage.getItem('website'));
    displaySite();
}
function addSite()
{
    var website = 
    {
    siteName: sitNameInput.value,
    siteUrl: sitUrlInput.value
    }
    addingContainer.push(website);
    displaySite();
    localStorage.setItem('website',JSON.stringify(addingContainer));
    clearForm();
}

function clearForm()
{
    sitNameInput.value = "";
    sitUrlInput.value= "";
}

function displaySite ()
{
    var dataFromUser = ``;
    for (var i = 0;i<addingContainer.length ; i++)
    {
        dataFromUser +=` <tr>
                <td>${i+1}</td>
                <td>${addingContainer[i].siteName}</td>
                <td><a href="${addingContainer[i].siteUrl}" target="_blank" class="btn btn-primary">Visit</a></td>
                <td><button onclick="deletedSite(${i})" class="btn btn-danger">Delete</button></td>
                </tr>
            `
    }
    document.getElementById('webDataName').innerHTML = dataFromUser;
}


function deletedSite(deletedIndex)
{
    addingContainer.splice(deletedIndex,1)
    displaySite();
    localStorage.setItem('website',JSON.stringify(addingContainer));
}

//validation
function validateSiteName()
{
  var regex = /^([a-z|A-Z|0-9]){3,9}$/;
    var testResult = sitNameInput.value ;
    if(regex.test(testResult))
    {
        sitNameInput.classList.add("is-valid")
        sitNameInput.classList.remove("is-invalid")
        document.getElementById('good') .innerHTML = `<div class="valid-feedback">Looks good!</div>`;
    }
    else
    {
        sitNameInput.classList.add("is-invalid")
        sitNameInput.classList.remove("is-valid")
         document.getElementById('good') .innerHTML =  `<div class="invalid-feedback">Please enter a valid site name.</div>`;
    }
}

function validateSiteUrl()
{
  var regex = /^https?:\/\/+[a-z]*\.+[a-z]{2,6}$/;
    var testurlResult = sitUrlInput.value ;
    if(regex.test(testurlResult))
    {
        sitUrlInput.classList.add("is-valid")
        sitUrlInput.classList.remove("is-invalid")
        document.getElementById('goodurl') .innerHTML = `<div class="valid-feedback">Looks good!</div>`;
    }
    else
    {
        sitUrlInput.classList.add("is-invalid")
        sitUrlInput.classList.remove("is-valid")
         document.getElementById('goodurl') .innerHTML =  `<div class="invalid-feedback">Please enter a valid site URL.</div>`;
    }
}
checkCode();

function checkCode()
 {
    var checkSiteName = sitNameInput.value;
    var checkUrl = sitUrlInput.value;
  if (!checkSiteName||!checkUrl) {
      document.getElementById('submitbutton').innerHTML = preventDefault(); 
  }

}
