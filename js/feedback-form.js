window.onload = () => {
    let form = document.getElementById('feedback-form')

    if (form != null) {
        form.addEventListener('submit', submissionHandler)
    }

    let feedbackList = document.getElementById('feedback-list')
    if (feedbackList != null) {
        insertData(feedbackList)
    }

}

insertData = (list) => {
    let feedbacks = localStorage.getItem('feedbacks')
    if (feedbacks === null) {
        feedbacks = []
    } else {
        feedbacks = JSON.parse(feedbacks)
    }

    for (let feedback of feedbacks) {
        list.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">`+ feedback.name + ' | ' + feedback.email +`</div>
                ` + feedback.details + `
            </div>
            <button class="btn badge bg-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Answer</button>
        </li>
        `
    }
}



submissionHandler = (event) => {
    event.preventDefault()
    let email = document
        .querySelector("#feedback-form #InputEmail")
        .value

    let name = document
        .querySelector("#feedback-form #InputName")
        .value

    let details = document
        .querySelector("#feedback-form #InputDetails")
        .value


    let feedbacks = localStorage.getItem('feedbacks')
    if (feedbacks === null) {
        feedbacks = []
    } else {
        feedbacks = JSON.parse(feedbacks)
    }

    feedbacks.push({
        email: email,
        name: name,
        details: details
    })

    localStorage.setItem('feedbacks', JSON.stringify(feedbacks))

    var audio = new Audio("mixkit-bonus-earned-in-video-game-2058.wav");
    audio.play().then(() => alert("Sent"));

}