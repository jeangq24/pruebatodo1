export default ({handleLoadMore, loadMore}) => {
    
    return (
        <button className='button_load_more' onClick={handleLoadMore}>{loadMore ? 'Load more...' : 'Load less'}</button>
    )
}