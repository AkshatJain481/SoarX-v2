import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaArrowUp } from 'react-icons/fa'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function AdminGraph() {
  return (<>
    <div className='mt-[20px] ml-[20px] flex'> <h1 className='text-xl'>Graph </h1> 
    <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl mt-[30px] border-0 border-solid bg-white bg-clip-border">
    <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0 mt-[10px]">
    <h6 className='capitalize dark:text-white'>Sales Overview</h6>
    <p className="mb-0 leading-normal dark:text-white dark:opacity-60 text-sm"><FontAwesomeIcon icon={faArrowUp} style={{color: "#63E6BE",}} />
    <span className='font-semibold'> 5% more</span> " in 2024 "
    </p>
    </div>
    <div className='flex-auto p-4'>
        <div className='graph-container'>
        <div className="main-container">
		<div className="year-stats">
			<div className="month-group">
				<div className="bar h-100"></div>
				<p className="month">Jan</p>
			</div>
			<div className="month-group">
				<div className="bar h-50"></div>
				<p className="month">Feb</p>
			</div>
			<div className="month-group">
				<div className="bar h-75"></div>
				<p className="month">Mar</p>
			</div>
			<div className="month-group">
				<div className="bar h-25"></div>
				<p className="month">Apr</p>
			</div>
			<div className="month-group selected">
				<div className="bar h-100"></div>
				<p className="month">May</p>
			</div>
			<div className="month-group">
				<div className="bar h-50"></div>
				<p className="month">Jun</p>
			</div>
			<div className="month-group">
				<div className="bar h-75"></div>
				<p className="month">Jul</p>
			</div>
			<div className="month-group">
				<div className="bar h-25"></div>
				<p className="month">Aug</p>
			</div>
			<div className="month-group">
				<div className="bar h-50"></div>
				<p className="month">Sep</p>
			</div>
			<div className="month-group">
				<div className="bar h-75"></div>
				<p className="month">Oct</p>
			</div>
			<div className="month-group">
				<div className="bar h-25"></div>
				<p className="month">Nov</p>
			</div>
			<div className="month-group">
				<div className="bar h-100"></div>
				<p className="month">Dez</p>
			</div>
		</div>

		<div className="stats-info">
			<div className="graph-container">
				<div className="percent">
					<svg viewBox="0 0 36 36" className="circular-chart">
						<path className="circle" stroke-dasharray="100, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
						<path className="circle" stroke-dasharray="85, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
						<path className="circle" stroke-dasharray="60, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
						<path className="circle" stroke-dasharray="30, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
					</svg>
				</div>
				<p>Total: $2075</p>
			</div>

			<div className="info">
				<p>Most expensive category <br /><span>Restaurants & Dining</span></p>
				<p>Updated categories <span>2</span></p>
				<p>Bonus payments <span>$92</span></p>
			</div>
		</div>
	</div>
        </div></div>
    </div>
    </div>
    </>
  )
}

export default AdminGraph