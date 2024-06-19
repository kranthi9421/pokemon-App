'use client'

import React, { useState } from 'react'
import PockCard from './PockCard'

const PockList = ({ results }: any) => {
  const [filter, setFilter] = useState('')

  const filterArr = results.filter((item: any) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="mx-[30px]">
          <input
            list={results}
            className="border-2 border-rose-800"
            onChange={(e) => setFilter(e.target.value)}
          />
          <datalist id={results}>
            {results.map((op: any) => (
              <option>{op.name}</option>
            ))}
          </datalist>
        </div>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-[400px] border-2 border-green-800-700"
        />
      </div>
      <div className="flex gap-10 flex-wrap mt-20 mx-[50px]">
        {filterArr.map((item: any, index: any) => {
          return <PockCard name={item.name} index={index} />
        })}
      </div>
    </>
  )
}

export default PockList
