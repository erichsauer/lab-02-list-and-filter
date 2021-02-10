import React from 'react'
import hornedCreatures from '../data.js'
import ImageList from '../ImageList/ImageList'
import DropDown from '../DropDown/DropDown'

export default class Form extends React.Component { 
  render() {
    const { state } = this.props;
    const keywordOptions = hornedCreatures.map((singleCreature) => {
      return singleCreature.keyword
    })
    // remove duplicates
    const keywordOptionsDedupe = Array.from(new Set(keywordOptions))
    // generate drop-down options (to pass to DropDown class)
    const listOptions = keywordOptionsDedupe.map((singleOption) => {
      return <option key={Math.random()} value={singleOption}>{singleOption}</option>
    })
    // create array of horn numbers from data set  
    const hornsOptions = hornedCreatures.map((singleCreature) => {
      return singleCreature.horns
    })
    // remove duplicates
    const hornsOptionsDedupe = Array.from(new Set(hornsOptions))
    // generate drop-down options (to pass to DropDown class)  
    const listOptions2 = hornsOptionsDedupe.map((singleOption) => {
      return <option key={Math.random()} value={singleOption}>{singleOption}</option>
    })
  // filter zone
    const filteredCreaturesKeyword = hornedCreatures.filter((singleCreature) => {
      if (!state.keyword || state.keyword === 'Select') return true;
      if (state.keyword === singleCreature.keyword) return true;
        return false;
    })
    const filteredCreatures = filteredCreaturesKeyword.filter((singleCreature) => {
      if (!state.horns || state.horns === 'Select') return true;
      if (state.horns == singleCreature.horns) return true;
        return false;
          })        
    return (
      <>
        <form>
            <div className='label'>
            Choose your favorite horned creature category!
              <DropDown changeHandler={this.props.handleKeyword} listOptions={listOptions} value={state.keyword} />
            </div>
            <div className='label'>
            Choose your favorite horned creature by horns!
              <DropDown changeHandler={this.props.handleHorns} listOptions={listOptions2} value={state.horns} />
            </div>
        </form>
        <ImageList filteredCreatures={filteredCreatures}/>
      </>
    )
  }
}
