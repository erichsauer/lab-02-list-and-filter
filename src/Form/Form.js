import React from 'react'
import hornedCreatures from '../data.js'
import ImageList from '../ImageList/ImageList'

export default class Form extends React.Component {
    state = {
        keyword: '',
        horns: ''
        }

        handleKeyword = (e) => {
        this.setState({ keyword: e.target.value })
        }

        handleHorns = (e) => {
        this.setState({ horns: e.target.value })
        }
    
    render() {
        const keywordOptions = hornedCreatures.map((singleCreature) => {
            return singleCreature.keyword
          })
          // remove duplicates
          const keywordOptionsDedupe = Array.from(new Set(keywordOptions))
          // generate drop-down options 
          const listOptions = keywordOptionsDedupe.map((singleOption) => {
            return <option key={Math.random()} value={singleOption}>{singleOption}</option>
          })
            
          const hornsOptions = hornedCreatures.map((singleCreature) => {
            return singleCreature.horns
          })
        
          const hornsOptionsDedupe = Array.from(new Set(hornsOptions))
            
          const listOptions2 = hornsOptionsDedupe.map((singleOption) => {
            return <option key={Math.random()} value={singleOption}>{singleOption}</option>
          })
        // filter zone
          const filteredCreaturesKeyword = hornedCreatures.filter((singleCreature) => {
            if (!this.state.keyword || this.state.keyword === 'Select') return true;
            if (this.state.keyword === singleCreature.keyword) return true;
              return false;
          })
            
          const filteredCreatures = filteredCreaturesKeyword.filter((singleCreature) => {
            if (!this.state.horns || this.state.horns === 'Select') return true;
            if (this.state.horns == singleCreature.horns) return true;
              return false;
          })
              console.log(this.state.horns, this.state.keyword)
        
        return (
            <>
                <form>
                    <div className='label'>
                    Choose your favorite horned creature category!
                    <select value={this.state.keyword} onChange={this.handleKeyword} placeholder='Choose your favorite horned creature keyword!'>
                        <option>Select</option>
                    {listOptions}
                    </select>
                    </div>
                    <div className='label'>
                    Choose your favorite horned creature by horns!
                    <select value={this.state.horns} onChange={this.handleHorns} placeholder='Choose your favorite horned creature by horns!'>
                        <option>Select</option>
                    {listOptions2}
                    </select>
                    </div>
                </form>
                <ImageList filteredCreatures={filteredCreatures}/>
            </>
          )
    }
}
