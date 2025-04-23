jQuery(document) .ready(function(){

    (function() {
        emailjs.init("4uEfEZU9iMmL1LqQL"); // 💡 EmailJS에서 발급받은 Public Key 입력
    })();

    function sendEmail(event) {
        event.preventDefault(); // 기본 폼 제출 동작 방지

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const templateParams = {
            user_message: message
        };

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
            .then(function(response) {
                alert("문의가 성공적으로 전송되었습니다! 문의하신 내용으로 추후 내용이 수정됩니다.");
                document.getElementById("contactForm").reset(); // 폼 초기화
            }, function(error) {
                alert("문의 전송 실패! 다시 시도해주세요.");
                console.log("이메일 전송 오류:", error);
            });
    }
    function sendEmail(event) {
    event.preventDefault(); // 기본 제출 동작 방지
    let message = document.getElementById("message").value.trim();

    if (message === "" || message === "수정할 내용 > 수정된 내용 순으로 적어주세요.") {
        alert("문의 내용을 작성해주세요.");
        return;
    }

    alert("문의가 정상적으로 제출되었습니다!");
    document.getElementById("contactForm").reset(); // 폼 초기화 (필요하면 사용)
    closeModal(); // 문의 후 모달 닫기 (필요하면 사용)
}

function clearPlaceholder() {
    let messageBox = document.getElementById("message");
    if (messageBox.value === "수정할 내용 > 수정된 내용 순으로 적어주세요.") {
        messageBox.value = "";
    }
}

function restorePlaceholder() {
    let messageBox = document.getElementById("message");
    if (messageBox.value.trim() === "") {
        messageBox.value = "수정할 내용 > 수정된 내용 순으로 적어주세요.";
    }
}

function closeModal() {
    document.getElementById("inquiryModal").style.display = "none";
}
    // 모달 열기
    function openModal() {
        document.getElementById("inquiryModal").style.display = "block";
    }

    // 모달 닫기
    function closeModal() {
        document.getElementById("inquiryModal").style.display = "none";
    }
    // 예시 문구 초기값
    const placeholderText = "수정할 내용 > 수정된 내용 순으로 적어주세요.";

    // 입력창 클릭 시 예시 문구 삭제
    function clearPlaceholder() {
        const messageBox = document.getElementById("message");
        if (messageBox.value === placeholderText) {
            messageBox.value = "";
        }
    }

    // 입력창이 비어 있을 경우 예시 문구 복구
    function restorePlaceholder() {
        const messageBox = document.getElementById("message");
        if (messageBox.value.trim() === "") {
            messageBox.value = placeholderText;
        }
    }
});