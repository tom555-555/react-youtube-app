import React, { useEffect, useContext } from 'react'
import { Store } from '../../store';
import { fetchRelatedData } from '../../apis';
import SideListItem from '../SideListItem/SideListItem';
import Style from './SideList.module.scss'

const SideList = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const setRelatedVideo = async (id) => {
    await fetchRelatedData(id).then((res) => {
      console.log('relatedDataResponse', res)
      console.log(globalState.related)
      setGlobalState({ type: 'SET_RELATED', payload: { related: res.data.items } })
    })
  }
  useEffect(() => {
    setRelatedVideo(globalState.selected.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalState.selected])
  return (
    <div className={Style.sidenav}>
      {
        globalState.related ? globalState.related.map((relatedVideo) => {
          return (
            <SideListItem
              id={relatedVideo.id.videoId}
              key={relatedVideo.id.videoId}
              src={relatedVideo.snippet.thumbnails.default.url}
              title={relatedVideo.snippet.title}
            ></SideListItem>
          )
        }) : <p>No Related Video found</p>
      }
    </div>
  )
}

export default SideList
