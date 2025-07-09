import "./index.css";
import { enableValidation, settings } from "../scripts/validation.js";
<<<<<<< HEAD
import Api from "../utils/api.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "d26dbbd5-c868-4c82-9d51-7ee7be4db985",
    "Content-Type": "application/json",
  },
});

api
  .getInitialCards()
  .then((cards) => {
    cards.forEach((cardData) => {
      const card = new card(cardData, "#card-template");
      const cardElement = getCardElement(data);
      cardsList.prepend(cardElement);
    });
  })
  .catch(console.error);

api
  .editUserInfo()
  .then((userData) => {
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
    });
    userInfo.setUserAvatar(userData.avatar);
  })
  .catch((error) => {
    console.error("Error loading user info:", error);
  });
=======

const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: " https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];
>>>>>>> origin/main

const profileEditButton = document.querySelector(".profile__edit-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editModalNameInput = document.querySelector("#profile-name-input");
const editModalDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const editModal = document.querySelector("#edit-modal");
const editModalForm = document.querySelector(".modal__form");
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");
const modalCloseButton = editModal.querySelector(".modal__close-btn");
const cardModal = document.querySelector("#add-card-modal");
const cardModalCloseBtn = cardModal.querySelector(".modal__close-btn");
const cardModalAddBtn = document.querySelector(".profile__add-btn");
const cardForm = cardModal.querySelector(".modal__form");
const cardNameInput = cardModal.querySelector("#add-card-name-input");
const cardLinkInput = cardModal.querySelector("#add-card-link-input");
const cardSubmitBtn = cardModal.querySelector(".modal__submit-btn");
const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");
const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");
<<<<<<< HEAD
const avatarModal = document.querySelector("#avatar-modal");
const avatarModalCloseBtn = avatarModal.querySelector(".avatar__close-btn");
const avatarSubmitBtn = avatarModal.querySelector(".avatar__submit-btn");
const avatarForm = avatarModal.querySelector(".modal__form");
const avatarLinkInput = avatarModal.querySelector("#profile-avatar-input");
const avatarModalAddBtn = document.querySelector(".profile__avatar-btn");
const deleteModal = document.querySelector("#delete-modal");
const deleteForm = deleteModal.querySelector(".modal__form");

let selectedCard, selectedCardId;
=======
>>>>>>> origin/main

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-btn");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn");

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardNameEl.textContent = data.name;

  cardDeleteBtn.addEventListener("click", (evt) => {
<<<<<<< HEAD
    handleDeleteCard(cardElement, data._id);
=======
>>>>>>> origin/main
    if (evt.target.matches(".card__delete-btn")) {
      const card = event.target.closest(".card");
      card.remove();
    }
  });

<<<<<<< HEAD
  cardLikeBtn.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__like-btn_liked");
    handleLikeClick();
=======
  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-btn_liked");
>>>>>>> origin/main
  });

  cardImageEl.addEventListener("click", () => {
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    previewCaptionEl.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEsc);
  modal.addEventListener("mousedown", handleModalOverlay);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEsc);
  modal.removeEventListener("mousedown", handleModalOverlay);
}

function handleEsc(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
}

function handleModalOverlay(evt) {
  if (evt.target.classList.contains("modal")) {
    closeModal(evt.target);
  }
}

cardModalAddBtn.addEventListener("click", () => {
  openModal(cardModal);
});
cardModalCloseBtn.addEventListener("click", () => {
  closeModal(cardModal);
});
<<<<<<< HEAD

=======
>>>>>>> origin/main
cardForm.addEventListener("submit", handleAddCardSubmit);

previewModalCloseBtn.addEventListener("click", () => {
  closeModal(previewModal);
});

<<<<<<< HEAD
avatarModalAddBtn.addEventListener("click", () => {
  openModal(avatarModal);
});

avatarModalCloseBtn.addEventListener("click", () => {
  closeModal(avatarModal);
});

deleteModalCloseBtnModalCloseBtn.addEventListener("click", () => {
  closeModal(deleteModal);
});

avatarForm.addEventListener("submit", handleAvatarSubmit);

deleteForm.addEventListener("submit", handleDeleteSubmit);

=======
>>>>>>> origin/main
profileEditButton.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  resetValidation(
    editModalForm,
    [editModalNameInput, editModalDescriptionInput],
    {
      inputErrorClass: ".modal__input_type_error",
    }
  );
  openModal(editModal);
});

modalCloseButton.addEventListener("click", () => {
  closeModal(editModal);
});

editModalForm.addEventListener("submit", handleEditModalFormSubmit);

function handleEditModalFormSubmit(evt) {
  evt.preventDefault();
<<<<<<< HEAD
  submitButton.textContent = "Saving...";

  api
    .updateUserInfo(formData)
    .then((updatedUser) => {
      userInfo.setUserInfo(updatedUser);
      popup.close();
    })
    .catch((error) => {
      console.error("Error updating profile:", error);
    })
    .finally(() => {
      submitButton.textContent = "Save";
    });
=======
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal(editModal);
>>>>>>> origin/main
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
<<<<<<< HEAD
  const submitButton = evt.submitter;
  submitButton.textContent = "Saving...";
  const inputValues = { name: cardNameInput.value, link: cardLinkInput.value };
  const cardElement = getCardElement(inputValues);
  api.getInitialCards(cardLinkInput);
  cardsList.prepend(cardElement);
  evt.target.reset(cardSubmitBtn);
=======
  const inputValues = { name: cardNameInput.value, link: cardLinkInput.value };
  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  evt.target.reset(cardModal);
>>>>>>> origin/main
  disabledButton(cardSubmitBtn, settings);
  closeModal(cardModal);
}

<<<<<<< HEAD
function handleAvatarSubmit(evt) {
  evt.preventDefault();
  const submitButton = evt.submitter;
  submitButton.textContent = "Saving...";
  api
    .editAvatarInfo(avatarLinkInput)
    .then(() => {
      evt.target.reset(avatarModal);
      disabledButton(avatarSubmitBtn, settings);
      closeModal(avatarModal);
    })
    .catch((error) => {
      console.error("Error updating profile:", error);
    })
    .finally(() => {
      submitButton.textContent = "Save";
    });
}

function handleDeleteCard(cardElement, cardId) {
  selectedCard = cardElement;
  selectedCardId = cardId;
  openModal(deleteModal);
}

function handleDeleteSubmit(evt) {
  evt.preventDefault();
  api
    .deleteCard(selectedCardId)
    .then(() => {
      evt.target.remove(selectedCard);
      closeModal(deleteModal);
    })
    .catch(console.error);
}

function handleLikeClick() {
  const isLiked = this._likeButton.classList.contains(
    "card__like-button_active"
  );

  if (isLiked) {
    api
      .removeLike(this._id)
      .then(() => {
        this._likeButton.classList.remove("card__like-button_active");
      })
      .catch((error) => {
        console.error("Error removing like:", error);
      });
  } else {
    api
      .addLike(this._id)
      .then(() => {
        this._likeButton.classList.add("card__like-button_active");
      })
      .catch((error) => {
        console.error("Error adding like:", error);
      });
  }
}
=======
initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
});
>>>>>>> origin/main

enableValidation(settings);
