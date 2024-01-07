import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";


const NewProject = (props) => {
    const title = useRef()
    const description = useRef()
    const date = useRef()
    const modal = useRef()

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = date.current.value;

        if (enteredTitle.trim() === '' || 
        enteredDescription.trim() === '' || 
        enteredDate.trim() === '') {
            modal.current.open();
            return;
        }

        props.onAdd({
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate
        })
    }


    return (<>
        <Modal ref={modal} buttonCaption='Okay'>
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
            <p className='text-stone-600 mb-4'>Please make  sure you provided valid input</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button onClick={props.onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </li>
            </menu>
            <div>
                <Input ref={title} type='text' label='Title' />
                <Input ref={description} label='Description' textarea />
                <Input ref={date} label='Due Date' type='date' />
            </div>
        </div>
    </>
    )
}

export default NewProject;