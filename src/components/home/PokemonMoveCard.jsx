export default ({moveDetail}) => {
    const {effect_entries,power,accuracy, name} = moveDetail
    return (
        <div className='contain_move_detail'>
        <h1 className='h1_move_detail'>{name}</h1>
        <div className='contain3_move_detail'>
            <h2 className='h2_move_detail'>Power: <span>{power}</span></h2>
        
            <h2 className='h2_move_detail'>Acurracy: <span>{accuracy}</span></h2>
        </div>

        <div className='contain2_move_detail'>
            {effect_entries?.map((ef)=>{
                return (
                    <>
                    <h3 className='h3_move_detail'>Effec: <p>{ef?.effect}</p></h3>
                    
                    <h3 className='h3_move_detail'>Short effect: <p>{ef?.short_effect}</p></h3>
                    
                    </>
                )
            })}
        </div>
     
        </div>
    )
}