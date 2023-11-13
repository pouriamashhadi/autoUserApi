let $ = document,
    userName = $.querySelector(".userName"),
    userTitle =  $.querySelector(".userTitle"),
    email =  $.querySelector(".email"),
    userPic =  $.querySelector(".userPic img");


    


fetch("https://randomuser.me/api/")
    .then(resultApi=>{
        return resultApi.json()
    })
    .then(
        resultApi=>{
        console.log(resultApi.results[0])

        let infoUser={
            nameTitle: resultApi.results[0].name.title,
            first:resultApi.results[0].name.first,
            last:resultApi.results[0].name.last,
            gender:resultApi.results[0].gender,
            email:resultApi.results[0].email,
            pic: resultApi.results[0].picture.large
        }



        userName.innerHTML=infoUser.first +" "+ infoUser.last;
        userTitle.innerHTML=infoUser.nameTitle;
        email.innerHTML=infoUser.email;

        userPic.setAttribute("src",infoUser.pic)
        
        

        console.log(infoUser)

    }
    )