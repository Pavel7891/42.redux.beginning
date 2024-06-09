

let ADD_POST = 'ADD-POST'

let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {

    postsArray: [
        {id: 1, message: "Hi, how are you ?", likeCount:10},
        {id: 2, message: "I've got some news for you", likeCount: 20},
        {id: 3, message: "Hope, you are lucky", likeCount: 25} 
      ],
    newPostText:'kamasutra',
   
    }


const profileReducer = (state = initialState, action)=> {
debugger;
//     if (action.type === ADD_POST)
        
//         { 
//             let newPost = {
//                 id: 5,
//                 message: state.newPostText,
//                 likeCount: 0
//             }
//             state.postsArray.push(newPost);
//             state.newPostText = '';
//         } 

//     else if // ation.type === 'UPDATE-NEW-POST-TEXT') 
//         ( action.type === UPDATE_NEW_POST_TEXT )
//             {
//             state.newPostText = action.newText;
//         }
//     return state;
// 

switch (action.type) {
  
    case ADD_POST:
        let newPost = {
            id: 4,
            message: state.newPostText,
            likeCount: 0
        }
        state.postsArray.push(newPost);
        state.newPostText = '';
        return state;

    case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;
        return state;

        default:
        return state;
    }
}


export default profileReducer

export const addPostCreator = () => {
    return ( 
    {type: ADD_POST}
    )
  }
  
  export const updateNewPostTextCreator = (text)=> {
    return (
      {type: UPDATE_NEW_POST_TEXT, newText: text}
    )
  }



/* Создаем объект initialState и переносим 
в него содержимое объекта profilePage, которое
прежде содержалось в _state объекта store, 
в файое state.js.
И присваиваем этот вновь созданный объект
в параметр  state нашей функции profileReducer.
Аналогично поступаем в файле dialogues-reducer
относительно функции dialoguesReducer, т. е. 
передаем ей в параметр  state объект dialoguesPage.
*/



 