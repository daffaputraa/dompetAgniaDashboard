import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'

const stats = [
  { name: 'Jumlah Sedekah', stat: 'Rp 10.000.000', previousStat: '70,946', change: '12%', changeType: 'increase' },
  // { name: 'Total Sedekah Hari', stat: 'Rp 1.000.000', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
  { name: 'Rata-rata Sedekah', stat: 'Rp 1.020.000', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
  { name: 'Total Transaksi', stat: '400', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
} 

export default function Example() {
  return (
    <div className='col-span-8'>
      {/* <h3 className="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3> */}
      <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((item, index) => (
          <div key={item.name} className="px-4 py-5 sm:p-6 flex flex-col gap1">
            <dt className="text-sm font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex flex-col items-baseline justify-between md:block lg:flex gap-1">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600 ">
                {item.stat}
              </div>
              {/* <div className="stats-number flex gap-2 items-center">
                <span className=" text-sm font-medium text-gray-500 line-clamp-1">dari periode sebelumnya</span>
                <div
                  className={classNames(
                    item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                    'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0',
                  )}
                >
                  {item.changeType === 'increase' ? (
                    <ArrowUpIcon
                      aria-hidden="true"
                      className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                    />
                  ) : (
                    <ArrowDownIcon
                      aria-hidden="true"
                      className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                    />
                  )}

                  <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                  {item.change}
                </div>
              
              </div> */}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
