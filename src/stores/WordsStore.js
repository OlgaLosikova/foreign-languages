import { makeAutoObservable, runInAction } from "mobx";
const baseUrl = "https://itgirlschool.justmakeit.ru";
class WordsStore {
  words = [];
  addRow = false;
  hideButton = false;
  loading = true;
  err = null;
  constructor() {
    makeAutoObservable(this);
  }
  fetchWords = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/words`);
      if (response.ok) {
        const data = await response.json();
        runInAction(() => {
          this.words = data;
          this.loading = false;
        });
      }
    } catch (err) {
      runInAction(() => {
        this.err = new Error("Что-то пошло не так...");
        this.loading = false;
      });
    }
  };
  addWord = async (addedWord) => {
    const response = await fetch(`${baseUrl}/api/words/add`, {
      method: "POST",
      body: JSON.stringify(addedWord),
    });
    const data = await response.json();
    runInAction(() => {
      this.words.push(data);
    });
  };
  deleteWord = async (deleteId) => {
    await fetch(`${baseUrl}/api/words/${deleteId}/delete`, {
      method: "POST",
    });
    runInAction(() => {
      this.words = this.words.filter((word) => word.id !== deleteId);
    });
  };
  updateWord = async (updatedWord, updatedId) => {
    const response = await fetch(`${baseUrl}/api/words/${updatedId}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWord),
    });
    const data = await response.json();
    runInAction(() => {
      this.words = this.words.map((word) =>
        word.id === updatedId ? data : word
      );
    });
  };
  setAddRowStart = () => {
    this.addRow = true;
  };
  setAddRowEnd = () => {
    this.addRow = false;
  };
  setHideButton = () => {
    this.hideButton = !this.hideButton;
  };
}

const store = new WordsStore();
export default store;
