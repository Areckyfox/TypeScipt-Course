//validation

interface Validateable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validateableInput: Validateable) {
  let isValid = true;
  if(validateableInput.required) {
    isValid = isValid && validateableInput.value.toString().trim().length !== 0;
  }
  if(validateableInput.minLength != null && validateableInput.value === 'string') {
    isValid = isValid && validateableInput.value.length >= validateableInput.minLength;
  }
  if(validateableInput.maxLength != null && validateableInput.value === 'string') {
    isValid = isValid && validateableInput.value.length <= validateableInput.maxLength;
  }
  if(validateableInput.min != null && typeof validateableInput.value === 'number') {
    isValid = isValid && validateableInput.min >= validateableInput.value;
  } 
  if(validateableInput.max != null && typeof validateableInput.value === 'number') {
    isValid = isValid && validateableInput.max <= validateableInput.value;
  } 
}
// autobind decorator

function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const orginalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = orginalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  tileInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedContent = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedContent.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.tileInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private gatherUserInput():[string, string, number] | void {
    const enteredTitle = this.tileInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;
    
    const titleValidatable: Validateable = {
      value: enteredTitle,
      required: true,
      minLength: 5
    }
    const descriptionValidatable: Validateable = {
      value: enteredDescription,
      required: true
    }
    const peopleValidatable: Validateable = {
      value: enteredPeople,
      required: true,
      min: 1,
      max: 5
    }
    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("invalid input, please try again!");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.tileInputElement.value ='';
    this.descriptionInputElement.value ='';
    this.peopleInputElement.value ='';
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people);
      this.clearInputs;
      
    }
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjjInput = new ProjectInput();
