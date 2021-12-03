# NodeMongoose

Movie db with CRUD functions

ADD
"add" --title "On Her Majesties Secret Service" --actor "George Lazenby" --genre "action" --rating "10"

ADD MULTI
"add multi" --title "On Her Majesties Secret Service" --actor "George Lazenby" --genre "action" --rating "10" --title2 "The Man With The Golden Gun" --actor2 "Roger Moore" --genre2 "action" --rating2 "10"

LIST
"list"

UPDATE
"update" --title "<oldtitle>" --newTitle "<newtitle>"

UPDATE MANY
"update movie many" --actor "Ellen Page" --newActor "Elliot Page"

UPDATE VARIABLE
"update variable" --<key of document to be updated> "<value of key of document to be updated>" --<key to be updated> "<value of key to updated>"

DELETE
"delete" --title "<title>"

SEARCH TITLE
"search title" --title "<title>"

SEARCH ACTOR
"search actor" --actor "<actor>"

SEARCH GENRE
"search genre" --genre "<genre>"

SEARCH ALL
"search all" --<key> "<value>"
