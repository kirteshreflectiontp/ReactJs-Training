const InputBox = () => {
    return(
        <>
        <section>
        <div class="book-1">
            <div class="book-1_h1">RESERVATION</div>
            <div class="book-1_h2">BOOK YOUR TABLE</div>
        </div>

        <div class="book-table-main">
            <div class="book-table1">
                <div><input id="name" type="text" placeholder="Name" class="book-2"/>
                    <div class="orange" id="nameerror"></div>
                </div>
            </div>

            <div class="book-table1">
                <div><input id="email" type="email" placeholder="Email" class="book-2"/>
                    <div class="orange" id="emailerror"></div>
                </div>
            </div>
        </div>

        <div class="book-table-main">
            <div class="book-table1">
                <div><input id="date" type="text" placeholder="Date" class="book-2"/>
                    <div class="orange" id="dateerror"></div>

                </div>
            </div>

            <div class="book-table1">
                <div><input  type="text" name="time" id="time" placeholder="Time" class="book-2"/>
                </div>
            </div>
        </div>


        <div class="book-table-main">
            <div class="book-table1">
                <div><input id="people" type="text" placeholder="People" class="book-2"/>
                    <div class="orange" id="propleerror"></div>
                </div>
            </div>

            <div class="book-table1">
                <div><button type="button" id="btntable" value="" class="book-2_input">FIND A TABLE</button>
                    <div class="orange" id="dateerror"></div>
                </div>
            </div>

        </div>
       

    </section>
        </>
    )
}
export default InputBox;