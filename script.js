const noteSelector = document.querySelector("#noteSelector");
const notesSquare = document.querySelector("#notesSquare");

const notes = ["C","D♭","D","E♭","E","F","G♭","G","A♭","A","B♭","B"];

notes.forEach((note, index) => {
  const option = document.createElement("option");
  option.classList.add("list");
  option.textContent = note;
  option.value = index;
  noteSelector.appendChild(option);

  const square = document.createElement("div");
  square.classList.add("note");
  square.textContent = note;
  square.id = note;
  notesSquare.appendChild(square);
});

const modeSelector = document.querySelector("#modeSelector");

const major = [2,2,1,2,2,2,1];
const minor = [2,1,2,2,1,2,2];
const modes = [major, minor];
const modesNames = ["Major", "Minor"];

modesNames.forEach((mode, index) =>  {
  const option = document.createElement("option");
  option.classList.add("list");
  option.textContent = mode;
  option.value = index;
  modeSelector.appendChild(option);
});

let notesInScale = [];

function calculate(index, mode) {
  clear();
  notesInScale = [];
  modes[mode].forEach(interval=> {
    index +=  interval;
    index = index % 12;
    const square = document.querySelector(`#${notes[index]}`);
    square.classList.add("inScale");
    notesInScale.push(notes[index]);
  });
  return notesInScale;
}

function clear(){
  notesInScale.forEach(note=> {
    const square = document.querySelector(`#${note}`);
    square.classList.remove("inScale");
  })
}

let note = Number(noteSelector.value);
let mode = Number(modeSelector.value);
calculate(note, mode);

noteSelector.addEventListener('change', () => {
  note = Number(noteSelector.value);
  mode = Number(modeSelector.value);
  calculate(note, mode);
});

modeSelector.addEventListener('change', () => {
  note = Number(noteSelector.value);
  mode = Number(modeSelector.value);
  calculate(note, mode);
});
