import React from 'react';
import './tools-widget.scss';
import PropTypes from 'prop-types';

export default function ToolsWidget() {
    const tdata = {
        title: "Highlights of KPMG's Audit Technology Tools",
        tools: [
            {
                toolId: "1",
                toolName: "Interest Income Recalculation (ICR)",
                imageUrl: "https://s3-alpha-sig.figma.com/img/5b8c/3b9a/669b309418dbfc974f218be517eca747?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qH~PFdyJvuIouwDgzaj50c5-EM5CkYPGpy6yZhRfhhwF~agvOeLfrDhdTQmWTd6WHtzoVrK2Ej3z22bnHcq8sys8gN4ROtg1px8Av7TsTmOMZV9C70yffrrFUqcLhXNLlfHXphL4-qRpwx25GWGNXPL5HEhaPU26QS9rj-KU3LmhNaAwbBNE2BNzQj3SkjxNNMsxHdbpBQxgBLbXzWY-UvhX6amzYGUdDU-ygy~EVddmZcTwVifMvQEfZYmcOx8sVPFnw4u97lYDqq1l4fmVXT63RMt0Tfv8-8ZHaSfekbWGagdBzcmK~8WRbzhlcJ-eX7rIuGDjEGG4PytPg466xQ__",
                content: "The interest income recalculation tool takes all of Barclays’ interest income related transactional data and recalculates daily interest income on an account level basis. The routine ensures repayments and other transactions are factored into the calculation, along with the interest rate in effect.​"
            },
            {
                toolId: "2",
                toolName: "Interest Income Recalculation (ICR)",
                imageUrl: "https://s3-alpha-sig.figma.com/img/5b8c/3b9a/669b309418dbfc974f218be517eca747?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qH~PFdyJvuIouwDgzaj50c5-EM5CkYPGpy6yZhRfhhwF~agvOeLfrDhdTQmWTd6WHtzoVrK2Ej3z22bnHcq8sys8gN4ROtg1px8Av7TsTmOMZV9C70yffrrFUqcLhXNLlfHXphL4-qRpwx25GWGNXPL5HEhaPU26QS9rj-KU3LmhNaAwbBNE2BNzQj3SkjxNNMsxHdbpBQxgBLbXzWY-UvhX6amzYGUdDU-ygy~EVddmZcTwVifMvQEfZYmcOx8sVPFnw4u97lYDqq1l4fmVXT63RMt0Tfv8-8ZHaSfekbWGagdBzcmK~8WRbzhlcJ-eX7rIuGDjEGG4PytPg466xQ__",
                content: "The interest income recalculation tool takes all of Barclays’ interest income related transactional data and recalculates daily interest income on an account level basis. The routine ensures repayments and other transactions are factored into the calculation, along with the interest rate in effect.​"
            },
            {
                toolId: "3",
                toolName: "Interest Income Recalculation (ICR)",
                imageUrl: "https://s3-alpha-sig.figma.com/img/5b8c/3b9a/669b309418dbfc974f218be517eca747?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qH~PFdyJvuIouwDgzaj50c5-EM5CkYPGpy6yZhRfhhwF~agvOeLfrDhdTQmWTd6WHtzoVrK2Ej3z22bnHcq8sys8gN4ROtg1px8Av7TsTmOMZV9C70yffrrFUqcLhXNLlfHXphL4-qRpwx25GWGNXPL5HEhaPU26QS9rj-KU3LmhNaAwbBNE2BNzQj3SkjxNNMsxHdbpBQxgBLbXzWY-UvhX6amzYGUdDU-ygy~EVddmZcTwVifMvQEfZYmcOx8sVPFnw4u97lYDqq1l4fmVXT63RMt0Tfv8-8ZHaSfekbWGagdBzcmK~8WRbzhlcJ-eX7rIuGDjEGG4PytPg466xQ__",
                content: "The interest income recalculation tool takes all of Barclays’ interest income related transactional data and recalculates daily interest income on an account level basis. The routine ensures repayments and other transactions are factored into the calculation, along with the interest rate in effect.​"
            },
            {
                toolId: "4",
                toolName: "Interest Income Recalculation (ICR)",
                imageUrl: "https://s3-alpha-sig.figma.com/img/5b8c/3b9a/669b309418dbfc974f218be517eca747?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qH~PFdyJvuIouwDgzaj50c5-EM5CkYPGpy6yZhRfhhwF~agvOeLfrDhdTQmWTd6WHtzoVrK2Ej3z22bnHcq8sys8gN4ROtg1px8Av7TsTmOMZV9C70yffrrFUqcLhXNLlfHXphL4-qRpwx25GWGNXPL5HEhaPU26QS9rj-KU3LmhNaAwbBNE2BNzQj3SkjxNNMsxHdbpBQxgBLbXzWY-UvhX6amzYGUdDU-ygy~EVddmZcTwVifMvQEfZYmcOx8sVPFnw4u97lYDqq1l4fmVXT63RMt0Tfv8-8ZHaSfekbWGagdBzcmK~8WRbzhlcJ-eX7rIuGDjEGG4PytPg466xQ__",
                content: "The interest income recalculation tool takes all of Barclays’ interest income related transactional data and recalculates daily interest income on an account level basis. The routine ensures repayments and other transactions are factored into the calculation, along with the interest rate in effect.​"
            },
            {
                toolId: "5",
                toolName: "Interest Income Recalculation (ICR)",
                imageUrl: "https://s3-alpha-sig.figma.com/img/5b8c/3b9a/669b309418dbfc974f218be517eca747?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qH~PFdyJvuIouwDgzaj50c5-EM5CkYPGpy6yZhRfhhwF~agvOeLfrDhdTQmWTd6WHtzoVrK2Ej3z22bnHcq8sys8gN4ROtg1px8Av7TsTmOMZV9C70yffrrFUqcLhXNLlfHXphL4-qRpwx25GWGNXPL5HEhaPU26QS9rj-KU3LmhNaAwbBNE2BNzQj3SkjxNNMsxHdbpBQxgBLbXzWY-UvhX6amzYGUdDU-ygy~EVddmZcTwVifMvQEfZYmcOx8sVPFnw4u97lYDqq1l4fmVXT63RMt0Tfv8-8ZHaSfekbWGagdBzcmK~8WRbzhlcJ-eX7rIuGDjEGG4PytPg466xQ__",
                content: "The interest income recalculation tool takes all of Barclays’ interest income related transactional data and recalculates daily interest income on an account level basis. The routine ensures repayments and other transactions are factored into the calculation, along with the interest rate in effect.​"
            },
            {
                toolId: "6",
                toolName: "Interest Income Recalculation (ICR)",
                imageUrl: "https://s3-alpha-sig.figma.com/img/5b8c/3b9a/669b309418dbfc974f218be517eca747?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qH~PFdyJvuIouwDgzaj50c5-EM5CkYPGpy6yZhRfhhwF~agvOeLfrDhdTQmWTd6WHtzoVrK2Ej3z22bnHcq8sys8gN4ROtg1px8Av7TsTmOMZV9C70yffrrFUqcLhXNLlfHXphL4-qRpwx25GWGNXPL5HEhaPU26QS9rj-KU3LmhNaAwbBNE2BNzQj3SkjxNNMsxHdbpBQxgBLbXzWY-UvhX6amzYGUdDU-ygy~EVddmZcTwVifMvQEfZYmcOx8sVPFnw4u97lYDqq1l4fmVXT63RMt0Tfv8-8ZHaSfekbWGagdBzcmK~8WRbzhlcJ-eX7rIuGDjEGG4PytPg466xQ__",
                content: "The interest income recalculation tool takes all of Barclays’ interest income related transactional data and recalculates daily interest income on an account level basis. The routine ensures repayments and other transactions are factored into the calculation, along with the interest rate in effect.​"
            },
            // {
            //     toolId: "7",
            //     toolName: "Interest Income Recalculation (ICR)",
            //     imageUrl: "https://s3-alpha-sig.figma.com/img/5b8c/3b9a/669b309418dbfc974f218be517eca747?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qH~PFdyJvuIouwDgzaj50c5-EM5CkYPGpy6yZhRfhhwF~agvOeLfrDhdTQmWTd6WHtzoVrK2Ej3z22bnHcq8sys8gN4ROtg1px8Av7TsTmOMZV9C70yffrrFUqcLhXNLlfHXphL4-qRpwx25GWGNXPL5HEhaPU26QS9rj-KU3LmhNaAwbBNE2BNzQj3SkjxNNMsxHdbpBQxgBLbXzWY-UvhX6amzYGUdDU-ygy~EVddmZcTwVifMvQEfZYmcOx8sVPFnw4u97lYDqq1l4fmVXT63RMt0Tfv8-8ZHaSfekbWGagdBzcmK~8WRbzhlcJ-eX7rIuGDjEGG4PytPg466xQ__",
            //     content: "The interest income recalculation tool takes all of Barclays’ interest income related transactional data and recalculates daily interest income on an account level basis. The routine ensures repayments and other transactions are factored into the calculation, along with the interest rate in effect.​"
            // },
            // {
            //     toolId: "8",
            //     toolName: "Interest Income Recalculation (ICR)",
            //     imageUrl: "https://s3-alpha-sig.figma.com/img/5b8c/3b9a/669b309418dbfc974f218be517eca747?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qH~PFdyJvuIouwDgzaj50c5-EM5CkYPGpy6yZhRfhhwF~agvOeLfrDhdTQmWTd6WHtzoVrK2Ej3z22bnHcq8sys8gN4ROtg1px8Av7TsTmOMZV9C70yffrrFUqcLhXNLlfHXphL4-qRpwx25GWGNXPL5HEhaPU26QS9rj-KU3LmhNaAwbBNE2BNzQj3SkjxNNMsxHdbpBQxgBLbXzWY-UvhX6amzYGUdDU-ygy~EVddmZcTwVifMvQEfZYmcOx8sVPFnw4u97lYDqq1l4fmVXT63RMt0Tfv8-8ZHaSfekbWGagdBzcmK~8WRbzhlcJ-eX7rIuGDjEGG4PytPg466xQ__",
            //     content: "The interest income recalculation tool takes all of Barclays’ interest income related transactional data and recalculates daily interest income on an account level basis. The routine ensures repayments and other transactions are factored into the calculation, along with the interest rate in effect.​"
            // },
            // {
            //     toolId: "9",
            //     toolName: "Interest Income Recalculation (ICR)",
            //     imageUrl: "https://s3-alpha-sig.figma.com/img/5b8c/3b9a/669b309418dbfc974f218be517eca747?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qH~PFdyJvuIouwDgzaj50c5-EM5CkYPGpy6yZhRfhhwF~agvOeLfrDhdTQmWTd6WHtzoVrK2Ej3z22bnHcq8sys8gN4ROtg1px8Av7TsTmOMZV9C70yffrrFUqcLhXNLlfHXphL4-qRpwx25GWGNXPL5HEhaPU26QS9rj-KU3LmhNaAwbBNE2BNzQj3SkjxNNMsxHdbpBQxgBLbXzWY-UvhX6amzYGUdDU-ygy~EVddmZcTwVifMvQEfZYmcOx8sVPFnw4u97lYDqq1l4fmVXT63RMt0Tfv8-8ZHaSfekbWGagdBzcmK~8WRbzhlcJ-eX7rIuGDjEGG4PytPg466xQ__",
            //     content: "The interest income recalculation tool takes all of Barclays’ interest income related transactional data and recalculates daily interest income on an account level basis. The routine ensures repayments and other transactions are factored into the calculation, along with the interest rate in effect.​"
            // },
            // {
            //     toolId: "10",
            //     toolName: "Interest Income Recalculation (ICR)",
            //     imageUrl: "https://s3-alpha-sig.figma.com/img/5b8c/3b9a/669b309418dbfc974f218be517eca747?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qH~PFdyJvuIouwDgzaj50c5-EM5CkYPGpy6yZhRfhhwF~agvOeLfrDhdTQmWTd6WHtzoVrK2Ej3z22bnHcq8sys8gN4ROtg1px8Av7TsTmOMZV9C70yffrrFUqcLhXNLlfHXphL4-qRpwx25GWGNXPL5HEhaPU26QS9rj-KU3LmhNaAwbBNE2BNzQj3SkjxNNMsxHdbpBQxgBLbXzWY-UvhX6amzYGUdDU-ygy~EVddmZcTwVifMvQEfZYmcOx8sVPFnw4u97lYDqq1l4fmVXT63RMt0Tfv8-8ZHaSfekbWGagdBzcmK~8WRbzhlcJ-eX7rIuGDjEGG4PytPg466xQ__",
            //     content: "The interest income recalculation tool takes all of Barclays’ interest income related transactional data and recalculates daily interest income on an account level basis. The routine ensures repayments and other transactions are factored into the calculation, along with the interest rate in effect.​"
            // },
            // {
            //     toolId: "11",
            //     toolName: "Interest Income Recalculation (ICR)",
            //     imageUrl: "https://s3-alpha-sig.figma.com/img/5b8c/3b9a/669b309418dbfc974f218be517eca747?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qH~PFdyJvuIouwDgzaj50c5-EM5CkYPGpy6yZhRfhhwF~agvOeLfrDhdTQmWTd6WHtzoVrK2Ej3z22bnHcq8sys8gN4ROtg1px8Av7TsTmOMZV9C70yffrrFUqcLhXNLlfHXphL4-qRpwx25GWGNXPL5HEhaPU26QS9rj-KU3LmhNaAwbBNE2BNzQj3SkjxNNMsxHdbpBQxgBLbXzWY-UvhX6amzYGUdDU-ygy~EVddmZcTwVifMvQEfZYmcOx8sVPFnw4u97lYDqq1l4fmVXT63RMt0Tfv8-8ZHaSfekbWGagdBzcmK~8WRbzhlcJ-eX7rIuGDjEGG4PytPg466xQ__",
            //     content: "The interest income recalculation tool takes all of Barclays’ interest income related transactional data and recalculates daily interest income on an account level basis. The routine ensures repayments and other transactions are factored into the calculation, along with the interest rate in effect.​"
            // },
            // {
            //     toolId: "12",
            //     toolName: "Interest Income Recalculation (ICR)",
            //     imageUrl: "https://s3-alpha-sig.figma.com/img/5b8c/3b9a/669b309418dbfc974f218be517eca747?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qH~PFdyJvuIouwDgzaj50c5-EM5CkYPGpy6yZhRfhhwF~agvOeLfrDhdTQmWTd6WHtzoVrK2Ej3z22bnHcq8sys8gN4ROtg1px8Av7TsTmOMZV9C70yffrrFUqcLhXNLlfHXphL4-qRpwx25GWGNXPL5HEhaPU26QS9rj-KU3LmhNaAwbBNE2BNzQj3SkjxNNMsxHdbpBQxgBLbXzWY-UvhX6amzYGUdDU-ygy~EVddmZcTwVifMvQEfZYmcOx8sVPFnw4u97lYDqq1l4fmVXT63RMt0Tfv8-8ZHaSfekbWGagdBzcmK~8WRbzhlcJ-eX7rIuGDjEGG4PytPg466xQ__",
            //     content: "The interest income recalculation tool takes all of Barclays’ interest income related transactional data and recalculates daily interest income on an account level basis. The routine ensures repayments and other transactions are factored into the calculation, along with the interest rate in effect.​"
            // },
        ]
    }
    return (
        <>
            <div class="conten  ">
                <span>{tdata.title}</span>
                <div class="row row-cols-3">
                    {tdata.tools.map((tool, index) => (
                        <div class="col">
                            <div className='tool-container'>
                                <img src={tool.imageUrl} alt={tool.toolName} className='tool-image' />
                                <div>{tool.content}</div>
                                <div className='too_btm'>
                                    <h3>{tool.toolName}</h3>
                                    <span>Icon</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* {
                <div className='tools-container'>
                    <span>{tdata.title}</span>
                    <div className='tool-list'>

                        {tdata.tools.map((tool, index) => (
                            <>
                                <div key={tool.id + index} id={tool.id} className='tool-item'>
                                    <div className='tool-body'>
                                        <img src={tool.imageUrl} alt={tool.toolName} className='tool-image' />
                                        <p>{tool.content}</p>
                                    </div>
                                    <div className='tool-footer'>
                                        <h3>{tool.toolName}</h3>
                                        <span>Icon</span>
                                    </div>




                                </div> 
                            </>
                        ))
                        }
                    </div>
                </div>
            } */}
        </>
    );
}

// ToolsWidget.propTypes = {
//     toolsList: PropTypes.shape({
//         title: PropTypes.string,
//         tools: PropTypes.arrayOf(
//             PropTypes.shape({
//                 id: PropTypes.string,
//                 toolName: PropTypes.string,
//                 imageUrl: PropTypes.string,
//                 content: PropTypes.string,
//             })
//         ).isRequired,
//     }).isRequired,
// };
