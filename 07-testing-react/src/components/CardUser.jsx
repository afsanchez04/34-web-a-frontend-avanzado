
export function titleCase (text){

    if(text == '') return ''

    const arr = text.split(' ')
    const result = []

    for(let elem of arr){
        result.push( elem[0].toUpperCase() + elem.substring(1).toLowerCase() )
    }

    return result.join(' ')

}

export function mayorDeEdad (edad){
    if(edad < 0) return null
    return (edad >= 18) ? true : false
}



export const CardUser = ({name, age, description, color}) => {
  return (
    <div>CardUser</div>
  )
}
